// Elements
const button = document.getElementById('button');
const videoElement = document.getElementById('video');

//Prompt the user to select a media stream, pass to video element and play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    console.log(error)
  }
}
// Event Listener
button.addEventListener('click', async () => {
 
  //Disable the button 
  button.disabled = true;
  //Start Picture in Picture
  await videoElement.requestPictureInPicture();
  //Reset the button
  button.disabled = false;
});

// On load
selectMediaStream();