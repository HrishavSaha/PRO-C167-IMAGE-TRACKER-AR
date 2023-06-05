AFRAME.registerComponent('playbackcontrols', {
  schema: {
    isPlaying: {type: 'boolean', default: false}
  },

  init: function () {
    this.play()
    this.videoEl = this.el.getAttribute('material').src
    this.videoEl.pause()
    this.onClick = this.onClick.bind(this)
  },

  play: function() {
    window.addEventListener('click', this.onClick)
  },

  onClick: function(e) {
    if(!this.videoEl){
      return
    }

    var isPlaying = this.el.getAttribute('playbackcontrols').isPlaying
    this.el.object3D.visible = true

    if(!isPlaying){
      this.el.setAttribute('playbackcontrols', {isPlaying: true})
      this.videoEl.play()
    }else{
      this.el.setAttribute('playbackcontrols', {isPlaying: false})
      this.videoEl.pause()
    }
  }
});
