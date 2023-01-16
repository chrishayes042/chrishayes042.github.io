const app = Vue.createApp();

let All_mediaDevices = navigator.mediaDevices;
// let video = document.getElementById("videoCam");
// var vidStream;

const root = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      age: 32,
      name: "Chris",
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },

    openWebCam() {
      if (!All_mediaDevices || !All_mediaDevices.getUserMedia) {
        console.log("getUserMedia() not supported.");
        return;
      }
      All_mediaDevices.getUserMedia({
        audio: true,
        video: true,
      })
        .then(function (vidStream) {
          var video = document.getElementById("videoCam");
          if ("srcObject" in video) {
            video.srcObject = vidStream;
          } else {
            video.src = window.URL.createObjectURL(vidStream);
          }
          video.onloadedmetadata = function (e) {
            video.play();
          };
        })
        .catch(function (e) {
          console.log(e.name + ": " + e.message);
        });
    },
    // doesn't quite work...
    closeWebCam() {
      var video = document.getElementById("videoCam");
      All_mediaDevices.getUserMedia({
        audio: true,
        video: true,
      }).then(function () {
        video.pause();
        video.src = "";
      });
      console.log("Stream Stopped");
    },
  },
});

root.mount("#root");
