export default {
  functional: true,
  props: [ 'type', 'src' ],
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

    return createElement( 
      'figure', 
      {
        'class': props.type,
        'on' : {
          'click': listeners.click
        }
      },
      [img, caption]
    )
  }
}