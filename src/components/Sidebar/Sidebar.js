import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SettingsIcon from "@material-ui/icons/Settings";
import TodayIcon from "@material-ui/icons/Today";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

import { CALENDAR_PAGE, RECORDS_PAGE, SETTINGS_PAGE } from "../../constants";

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

function Sidebar(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem
          button
          component={Link}
          to="/dashboard/calendar"
          selected={props.selectedPage === CALENDAR_PAGE}
        >
          <ListItemIcon>
            <TodayIcon />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/dashboard/records"
          selected={props.selectedPage === RECORDS_PAGE}
        >
          <ListItemIcon>
            <AssignmentIndIcon />
          </ListItemIcon>
          <ListItemText primary="Records" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/dashboard/settings"
          selected={props.selectedPage === SETTINGS_PAGE}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
}

Sidebar.propTypes = {
  selectedPage: PropTypes.string.isRequired,
};

export default Sidebar;
