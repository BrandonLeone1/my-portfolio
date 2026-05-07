
import {Routes, Route, Outlet, ScrollRestoration} from 'react-router-dom'


function App() {
 

  return (
    <>
    <ScrollRestoration />
    <Outlet />
 { /*
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/financial-tracker' element={<FinancialTrackerWriteUp />}/>
      <Route path='/project-manager' element={<ProjectManagerWriteUp />}/>
      <Route path='/task-tracker' element={<TaskTrackerWriteUp />}/>
    </Routes>
    */}
    </>
  )
}

export default App
