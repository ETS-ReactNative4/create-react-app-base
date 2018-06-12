import React, { Fragment, PureComponent } from 'react'

import { Button, Row } from 'components/Common'
import StyleGuideSection from './StyleGuideSection'
import styleGuideConfig from 'strings/styleGuide/styleGuide.en.json'
import ThemeSelector from 'components/Global/ThemeSelector'

import './StyleGuideApp.scss'

class StyleGuideApp extends PureComponent {
  state = {
    rootKey: Object.keys(styleGuideConfig)[0]
  }

  componentDidMount() {
    this.setState({
      rootKey: this.props.match.params.id || Object.keys(styleGuideConfig)[0]
    })
  }

  navigateToUrl(rootKey) {
    window.scrollTo(0, 0)

    this.setState({
      rootKey
    })
    this.props.history.push('/style-guide/' + rootKey)
  }

  render() {
    return (
      <Row>
        <div className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky py-2">
            <ThemeSelector />
            <h1>{this.props.params}</h1>
            <br />
            {Object.keys(styleGuideConfig).map(rootKey => (
              <p key={rootKey}>
                <Button active={this.state.rootKey === rootKey} onClick={() => this.navigateToUrl(rootKey)} size="sm">
                  {this.state.rootKey === rootKey ? <strong>{rootKey}</strong> : <Fragment>{rootKey}</Fragment>}
                </Button>
              </p>
            ))}
          </div>
        </div>
        <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <StyleGuideSection rootKey={this.state.rootKey} />
        </div>
      </Row>
    )
  }
}

export default StyleGuideApp
