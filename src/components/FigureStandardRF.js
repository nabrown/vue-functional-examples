export default {

  props: {
    src: {
      required: true,
      type: String
    },
    type: {
      required: true,
      type: String
    },
    tags: {
      required: false,
      type: Array
    }
  },
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
      [ createElement('span', this.$slots.default) ]
    ) : ''

    const tags = this.tags && (this.type != 'framed') ? createElement(
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