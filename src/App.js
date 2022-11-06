import './App.css';
import './index.css';
import { Box } from '@mui/system';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { Button, Tooltip } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { Navbar , Footer , Sidebar , ThemeSettings }from './component'
import { Calendar , ColorPicker , ColorMapping , Customers , Ecommers , Employees , Orders , Kanban , Editor , Line , Area , Bar , Pie , Financial , Pyramid ,Stacked } from './pages'

const App = () => {
  const activeMenu = false

  return (
    <Box>
      <BrowserRouter>
          <Box className="wraper">
              <Box className="wraper-parent-icons">
                    <Tooltip title="settings">
                        <Button className="wraper-icons" type='button'>
                          <SettingsIcon></SettingsIcon>
                        </Button>
                    </Tooltip>
              </Box>
              {activeMenu ? 
              (
                <Box className="slider">
                  <Sidebar  />
                </Box>
              ) : 
              (
              <Box className="slider-hide">
                <Sidebar />
              </Box>
              )}

              <Box className='s'>
                  <Box className="wraper-navbar">
                        navbar
                  </Box>
              </Box>

              <Box>
                <Routes>
                    {/* Dashbord */}
                    <Route path='/' element={<Ecommers />} />
                    <Route path='/Ecommers' element={<Ecommers />} />

                    {/* pages */}
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/employees' element={<Employees />} />
                    <Route path='/customers' element={<Customers />} />

                    {/* Apps */}
                    <Route path='/kanban' element={ <Kanban />} />
                    <Route path='/editor' element={<Editor />} />
                    <Route path='/calendar' element={<Calendar />} />
                    <Route path='/color-picker' element={<ColorPicker />} />

                    {/* Charts */}
                    <Route path='/line' element={<Line />} />
                    <Route path='/area' element={<Area />} />
                    <Route path='/bar' element={<Bar />} />
                    <Route path='/pie' element={<Pie />} />
                    <Route path='/financial' element={<Financial />} />
                    <Route path='/color-mapping' element={<ColorMapping />} />
                    <Route path='/pyramid' element={<Pyramid />} />
                    <Route path='/stacked' element={<Stacked />} />
                 </Routes>
              </Box>

          </Box>
      </BrowserRouter>
    </Box>  
  );
}

export default App;
