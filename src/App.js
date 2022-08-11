import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {FiSettings as SettingsIcon} from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import './App.css'

const App = () => {
    const isMenuActive = false;
    return (
        <Router>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div
                    className='fixed right-4 bottom-4'
                    style={{
                    zIndex: '1000'
                }}>
                    <TooltipComponent content={"Settings"} position="Top">
                        <button
                            type='button'
                            className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                            style={{
                            background: 'blue',
                            borderRadius: '50%'
                        }}>
                            <SettingsIcon/>
                        </button>
                    </TooltipComponent>
                </div>
                {isMenuActive
                    ? <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>Sidebar</div>
                    : <div className='w-0 dark:bg-secondary-dark-bg'>Sidebar</div>}
                <div
                    className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${isMenuActive
                    ? 'md:ml-72'
                    : 'flex-2'}`}>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        Navbar
                    </div>
                </div>
                <div>
                  <Routes>
                    {/* DashBoard */}
                    <Route path='/' element="E-commerce"/>
                    <Route path='/ecommerce' element="E-commerce"/> 

                    {/* Pages */}
                    <Route path='/orders' element="orders"/>
                    <Route path='/employees' element="Employees"/>
                    <Route path='/customers' element="Customers"/>

                    {/* Apps */}
                    <Route path='/kanban' element="Kanban"/>
                    <Route path='/editor' element="Editor"/>
                    <Route path='/calendar' element="Calendar"/>

                    {/* Diagrams */}
                    <Route path='/linear' element="Linear"/>
                    <Route path='/area' element="Area"/>
                    <Route path='/bar' element="Bar"/>
                    <Route path='/pie' element="Pie"/>
                    <Route path='/financial' element="Financial"/>
                    <Route path='/pyramid' element="Pyramid"/>
                    <Route path='/stacked' element="Stacked"/>
                  </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App