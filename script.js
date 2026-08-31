let currentPlaylistName = "Coocking pc"; // Must match your first <option>
let activePlaylist = playlists[currentPlaylistName];
let player;
let currentTrackIndex = 0;
let progressInterval;

function updateClock() {
    const now = new Date();
    const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
    const dateOptions = { weekday: 'long', day: 'numeric', month: 'long' };
    
    document.getElementById('live-time').innerText = now.toLocaleTimeString('en-US', timeOptions).toLowerCase();
    document.getElementById('live-date').innerText = `${now.toLocaleDateString('en-US', dateOptions).toUpperCase()} - IST`;
}
setInterval(updateClock, 1000);
updateClock();

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: activePlaylist[currentTrackIndex].id, // Use activePlaylist
        playerVars: { 'autoplay': 0, 'controls': 0 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    updateUI();

    document.getElementById('playlist-selector').addEventListener('change', (e) => {
        currentPlaylistName = e.target.value;
        activePlaylist = playlists[currentPlaylistName]; // Switch the active array
        currentTrackIndex = 0; // Reset to the first song
        
        player.loadVideoById(activePlaylist[currentTrackIndex].id);
        document.getElementById('play-pause-btn').innerHTML = '<i class="fas fa-pause"></i>';
        updateUI();
    });


    const playBtn = document.getElementById('play-pause-btn');
    playBtn.addEventListener('click', () => {
        if (player.getPlayerState() === YT.PlayerState.PLAYING) {
            player.pauseVideo();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            player.playVideo();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
    });

    document.getElementById('next-btn').addEventListener('click', () => changeTrack(1));
    document.getElementById('prev-btn').addEventListener('click', () => changeTrack(-1));

    document.getElementById('volume-slider').addEventListener('input', (e) => {
        player.setVolume(e.target.value);
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        progressInterval = setInterval(updateProgressBar, 1000);
    } else {
        clearInterval(progressInterval);
    }
    
    if (event.data === YT.PlayerState.ENDED) {
        changeTrack(1);
    }
}

function changeTrack(direction) {
    currentTrackIndex += direction;
    if (currentTrackIndex >= activePlaylist.length) currentTrackIndex = 0;
    if (currentTrackIndex < 0) currentTrackIndex = activePlaylist.length - 1;
    
    player.loadVideoById(activePlaylist[currentTrackIndex].id);
    document.getElementById('play-pause-btn').innerHTML = '<i class="fas fa-pause"></i>';
    updateUI();
}

function updateUI() {
    const track = activePlaylist[currentTrackIndex];
    document.getElementById('song-title').innerText = track.title;
    document.getElementById('song-artist').innerText = track.artist;
    document.getElementById('thumbnail').src = track.thumb;
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function updateProgressBar() {
    const currentTime = player.getCurrentTime();
    const duration = player.getDuration();
    
    document.getElementById('current-time').innerText = formatTime(currentTime);
    document.getElementById('total-time').innerText = formatTime(duration);
    
    const progressPercent = (currentTime / duration) * 100;
    document.getElementById('progress-bar').value = progressPercent;
}

document.getElementById('progress-bar').addEventListener('input', (e) => {
    const seekTo = (e.target.value / 100) * player.getDuration();
    player.seekTo(seekTo, true);
});
function updateUI() {
    const track = activePlaylist[currentTrackIndex];
    document.getElementById('song-title').innerText = track.title;
    document.getElementById('song-artist').innerText = track.artist;
    document.getElementById('thumbnail').src = track.thumb;

    // ADD THIS NEW BLOCK: The Lock Screen Workaround
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: track.title,
            artist: track.artist,
            // You can use a generic album name if you don't have movie data
            album: "My Web Radio", 
            artwork: [
                { src: track.thumb, sizes: '512x512', type: 'image/jpeg' }
            ]
        });

        // Wire up the lock screen buttons to your YouTube player
        navigator.mediaSession.setActionHandler('play', () => { 
            player.playVideo(); 
            document.getElementById('play-pause-btn').innerHTML = '<i class="fas fa-pause"></i>';
        });
        navigator.mediaSession.setActionHandler('pause', () => { 
            player.pauseVideo(); 
            document.getElementById('play-pause-btn').innerHTML = '<i class="fas fa-play"></i>';
        });
        navigator.mediaSession.setActionHandler('previoustrack', () => changeTrack(-1));
        navigator.mediaSession.setActionHandler('nexttrack', () => changeTrack(1));
    }
}

