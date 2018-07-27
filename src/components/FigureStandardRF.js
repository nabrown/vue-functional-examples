export default {

  props: [ 'type', 'src', 'tags' ],
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

    const tags = this.tags ? createElement(
      'div',
      {'class' : 'tags'},
      this.tags.map(function (tag) {
        return createElement('span', tag)
      })
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
      [img, caption, tags]
    )
  }
}