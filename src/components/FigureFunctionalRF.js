export default {
  functional: true,
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
  render(createElement, {props, listeners, slots}){

    const img = createElement(
      'img',
      {
        'attrs': {
          'src': props.src
        }
      }
    )

    const caption = slots().default ? createElement(
      'figcaption',
      [ createElement('span', slots().default) ]
    ) : ''

    const tags = props.tags && (props.type != 'framed') ? createElement(
      'div',
      {'class' : 'tags'},
      props.tags.map(function (tag) {
        return createElement('span', tag)
      })
    ) : ''

    return createElement( 
      'figure', 
      {
        'class': props.type,
        'on' : {
          'click': listeners.click
        }
      },
      [img, caption, tags]
    )
  }
}