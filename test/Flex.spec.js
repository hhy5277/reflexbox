
import { assign } from 'lodash'
import React from 'react'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import { Flex } from '../src'

const renderer = TestUtils.createRenderer()

describe('Flex', () => {
  let tree, style, computed

  const initial = {
    display: 'flex',
    flexWrap: null,
    flexDirection: null,
    flex: null,
    alignItems: null,
    justifyContent: null,
    marginLeft: null,
    marginRight: null,
  }

  beforeEach(() => {
    renderer.render(<Flex />)
    tree = renderer.getRenderOutput()
    style = tree.props.style
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have no styles by default', () => {
    expect(style).toEqual(initial)
  })

  context('when setting style prop', () => {
    beforeEach(() => {
      renderer.render(<Flex style={{ backgroundColor: 'tomato' }} />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should assign styles', () => {
      expect(style).toEqual(assign({ backgroundColor: 'tomato' }, initial))
    })
  })

  context('when setting className prop', () => {
    let className
    beforeEach(() => {
      renderer.render(<Flex className='Flex--custom' />)
      tree = renderer.getRenderOutput()
      className = tree.props.className
    })

    it('should add a class', () => {
      expect(className).toEqual('Flex Flex--custom')
    })
  })

  context('when no className is set', () => {
    let className
    beforeEach(() => {
      renderer.render(<Flex />)
      tree = renderer.getRenderOutput()
      className = tree.props.className
    })

    it('should not add a class', () => {
      expect(className).toEqual('Flex')
    })
  })

  context('when wrap prop is true', () => {
    beforeEach(() => {
      renderer.render(<Flex wrap />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should set flex-wrap wrap', () => {
      computed = assign({}, initial, { flexWrap: 'wrap' })
      expect(style).toEqual(computed)
    })
  })

  context('when column prop is true', () => {
    beforeEach(() => {
      renderer.render(<Flex column />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should set flex-direction column', () => {
      computed = assign({}, initial, { flexDirection: 'column' })
      expect(style).toEqual(computed)
    })
  })

  context('when align prop is set to stretch', () => {
    beforeEach(() => {
      renderer.render(<Flex align='stretch' />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should set align-items stretch', () => {
      computed = assign({}, initial, { alignItems: 'stretch' })
      expect(style).toEqual(computed)
    })
  })

  context('when align prop is set to center', () => {
    beforeEach(() => {
      renderer.render(<Flex align='center' />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should set align-items center', () => {
      computed = assign({}, initial, { alignItems: 'center' })
      expect(style).toEqual(computed)
    })
  })

  context('when align prop is set to baseline', () => {
    beforeEach(() => {
      renderer.render(<Flex align='baseline' />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should set align-items baseline', () => {
      computed = assign({}, initial, { alignItems: 'baseline' })
      expect(style).toEqual(computed)
    })
  })

  context('when align prop is set to flex-start', () => {
    beforeEach(() => {
      renderer.render(<Flex align='flex-start' />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should set align-items baseline', () => {
      computed = assign({}, initial, { alignItems: 'flex-start' })
      expect(style).toEqual(computed)
    })
  })

  context('when align prop is set to flex-end', () => {
    beforeEach(() => {
      renderer.render(<Flex align='flex-end' />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should set align-items baseline', () => {
      computed = assign({}, initial, { alignItems: 'flex-end' })
      expect(style).toEqual(computed)
    })
  })

  context('when justify prop is set to center', () => {
    beforeEach(() => {
      renderer.render(<Flex justify='center' />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should set justify-content center', () => {
      computed = assign({}, initial, { justifyContent: 'center' })
      expect(style).toEqual(computed)
    })
  })

  context('when justify prop is set to space-around', () => {
    beforeEach(() => {
      renderer.render(<Flex justify='space-around' />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should set justify-content space-around', () => {
      computed = assign({}, initial, { justifyContent: 'space-around' })
      expect(style).toEqual(computed)
    })
  })

  context('when justify prop is set to space-between', () => {
    beforeEach(() => {
      renderer.render(<Flex justify='space-between' />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should set justify-content space-between', () => {
      computed = assign({}, initial, { justifyContent: 'space-between' })
      expect(style).toEqual(computed)
    })
  })

  context('when justify prop is set to flex-start', () => {
    beforeEach(() => {
      renderer.render(<Flex justify='flex-start' />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should set justify-content flex-start', () => {
      computed = assign({}, initial, { justifyContent: 'flex-start' })
      expect(style).toEqual(computed)
    })
  })

  context('when justify prop is set to flex-end', () => {
    beforeEach(() => {
      renderer.render(<Flex justify='flex-end' />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should set justify-content flex-end', () => {
      computed = assign({}, initial, { justifyContent: 'flex-end' })
      expect(style).toEqual(computed)
    })
  })

  describe('gutter prop', () => {
    context('when set to 1', () => {
      beforeEach(() => {
        renderer.render(<Flex gutter={1} />)
        style = renderer.getRenderOutput().props.style
      })

      it('should set margin left and margin right -8', () => {
        computed = assign({}, initial, {
          marginLeft: -8,
          marginRight: -8
        })
        expect(style).toEqual(computed)
      })
    })
    context('when set to 2', () => {
      beforeEach(() => {
        renderer.render(<Flex gutter={2} />)
        style = renderer.getRenderOutput().props.style
      })

      it('should set margin left and margin right -16', () => {
        computed = assign({}, initial, {
          marginLeft: -16,
          marginRight: -16
        })
        expect(style).toEqual(computed)
      })
    })
    context('when set to 3', () => {
      beforeEach(() => {
        renderer.render(<Flex gutter={3} />)
        style = renderer.getRenderOutput().props.style
      })

      it('should set margin left and margin right -32', () => {
        computed = assign({}, initial, {
          marginLeft: -32,
          marginRight: -32
        })
        expect(style).toEqual(computed)
      })
    })
    context('when set to 4', () => {
      beforeEach(() => {
        renderer.render(<Flex gutter={4} />)
        style = renderer.getRenderOutput().props.style
      })

      it('should set margin left and margin right -64', () => {
        computed = assign({}, initial, {
          marginLeft: -64,
          marginRight: -64
        })
        expect(style).toEqual(computed)
      })
    })
  })

  describe('React context', () => {
    context('when setting scale', () => {
      beforeEach(() => {
        renderer.render(<Flex gutter={2} />, {
          reflexbox: {
            scale: [0, 2, 4, 6, 8]
          }
        })
        tree = renderer.getRenderOutput()
      })

      it('should pick up new scale values', () => {
        expect(tree.props.style.marginLeft).toEqual(-4)
        expect(tree.props.style.marginRight).toEqual(-4)
      })
    })

    context('when setting breakpoints', () => {
      beforeEach(() => {
        renderer.render(<Flex mobile />, {
          reflexbox: {
            breakpoints: {
              mobile: '(min-width: 30em)',
              tablet: '(min-width: 48em)',
              desktop: '(min-width: 60em)'
            }
          }
        })
        tree = renderer.getRenderOutput()
      })
      it('should pick up new breakpoints values')
    })
  })

  describe('media queries', () => {
    if (typeof window === 'undefined') {
      return false
    }

    class Root extends React.Component {
      render () { return <div {...this.props} /> }
    }

    it('should be in a windowed environment', () => {
      expect(window).toExist()
    })

    context('when below sm breakpoint', () => {
      let root, flex

      if (window.matchMedia('(min-width: 32em)').matches) {
        return false
      }

      context('with no props', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })

      context('with sm set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex sm />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display block', () => {
          expect(computed.display).toEqual('block')
        })
      })

      context('with md set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex md />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display block', () => {
          expect(computed.display).toEqual('block')
        })
      })

      context('with lg set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex lg />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display block', () => {
          expect(computed.display).toEqual('block')
        })
      })
    })

    context('when between sm and md breakpoints', () => {
      let root, flex

      if (!window.matchMedia('(min-width: 32em) and (max-width: 48em)').matches) {
        return false
      }

      context('with no props', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })

      context('with sm set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex sm />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })

      context('with md set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex md />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display block', () => {
          expect(computed.display).toEqual('block')
        })
      })

      context('with lg set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex lg />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display block', () => {
          expect(computed.display).toEqual('block')
        })
      })
    })

    context('when between md and lg breakpoints', () => {
      let root, flex

      if (!window.matchMedia('(min-width: 48em) and (max-width: 64em)').matches) {
        return false
      }

      context('with no props', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })

      context('with sm set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex sm />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })

      context('with md set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex md />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })

      context('with lg set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex lg />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display block', () => {
          expect(computed.display).toEqual('block')
        })
      })
    })

    context('when above lg breakpoints', () => {
      let root, flex

      if (!window.matchMedia('(min-width: 64em)').matches) {
        return false
      }

      context('with no props', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })

      context('with sm set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex sm />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })

      context('with md set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex md />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })

      context('with lg set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex lg />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })
    })

    context('when setting custom breakpoints in context', () => {
      let root, flex

      const ctx = {
        reflexbox: {
          breakpoints: {
            mobile: '(min-width: 30em)',
            tablet: '(min-width: 48em)',
            desktop: '(min-width: 60em)'
          }
        }
      }

      context('when below the tablet breakpoint', () => {
        if (!window.matchMedia('(max-width: 48em)').matches) {
          return false
        }

        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex mobile />
            </Root>,
            ctx
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should not set display flex', () => {
          expect(computed.display).toEqual('block')
        })
      })

      context('when above the tablet breakpoint', () => {
        if (!window.matchMedia('(min-width: 48em)').matches) {
          return false
        }

        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex mobile />
            </Root>,
            ctx
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })
    })
  })
})
