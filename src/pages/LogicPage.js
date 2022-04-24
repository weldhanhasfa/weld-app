import React from 'react'
import ErrorBoundary from '../Components/ErrorBoundary'
import Logic from '../Components/Logic'
import Menu from '../Components/Menu'

const LogicPage = () => {
  return (
    <div>
        <Menu />
        <div className='p-3'>
            <ErrorBoundary>
                <Logic />
            </ErrorBoundary>
        </div>
    </div>
  )
}

export default LogicPage