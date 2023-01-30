import React from 'react'
import { Box } from '@mui/system';
import { Link, NavLink } from 'react-router-dom'
import BlindIcon from '@mui/icons-material/Blind';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { Button, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import link from '../../data/data'
import './sidbar.css'
import { setMenuAction, useAppDispatch, useAppState } from '../../context';

const Sidebar = () => {

  const { state } = useAppState()
  const dispatch = useAppDispatch()


  const handleActionMenu = () => {
    const payload = {
      actionMenu: false
    }
    setMenuAction(dispatch, payload)
  }

  return (
    <Box className="Sidbar">
      <Box className="sidbar-icon">
        <Link to="/" onClick={() => { }}>
          <GitHubIcon /><span>Shoppy</span>
        </Link>
        <Tooltip title="Menu" >
          <Button type='button' onClick={handleActionMenu}>
            <CloseTwoToneIcon />
          </Button>
        </Tooltip>
      </Box>
      <Box className="wraper-title-sidebar">
        {link.map((item) => {
          return (
            <Box className="title-sidebar" key={item.title}>
              <p>{item.title}</p>
              {item.Link.map((link) => {
                return (
                  <NavLink
                    to={link.name}
                    key={link.name}
                    onClick={() => { }}
                    className=""
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </NavLink>
                )
              })}
            </Box>)
        })}
      </Box>
    </Box>
  )
}

export default Sidebar