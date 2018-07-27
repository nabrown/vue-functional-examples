export default {

  props: [ 'type', 'src' ],
  render(createElement){

    const img = createElement(
      'img',
      {
        'attrs': {
          'src': this.src
        }
      }
    )

    const caption = this.$slots.default ? createElement(
      'figcaption',
      this.$slots.default
    ) : ''
    
    return createElement(
      'figure', 
      {
        'class': this.type,
        'on': {
          'click' : () => {
            this.$emit('click')
          }
        }
      },
      [img, caption]
    )
  }
}