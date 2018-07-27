export default {
  functional: true,
  props: [ 'type', 'src', 'tags' ],
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
      slots().default
    ) : ''

    const tags = props.tags ? createElement(
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