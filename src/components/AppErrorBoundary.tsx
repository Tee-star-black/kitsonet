import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { hasError: boolean }

export default class AppErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Kitso-Net application error', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="grid min-h-screen place-items-center bg-primary-950 px-5 text-center text-white">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-accent-300">Kitso-Net</p>
            <h1 className="mt-4 font-heading text-5xl font-bold">The page could not load.</h1>
            <p className="mt-5 leading-7 text-primary-100">Please refresh the page. If the problem continues, contact our team for assistance.</p>
            <a href="/" className="green-button mt-8 inline-flex min-h-14 items-center justify-center px-7 font-semibold text-white">Return home</a>
          </div>
        </main>
      )
    }

    return this.props.children
  }
}
