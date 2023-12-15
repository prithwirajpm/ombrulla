import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function NestedList() {
  const [opensOne, setOpensOne] = React.useState(false);
  const [opensTwo, setOpensTwo] = React.useState(false);

  const handleClickOne = () => {
    setOpensOne(!opensOne);
    setOpensTwo(opensTwo);
  };
  const handleClickTwo = () => {
    setOpensOne(opensOne);
    setOpensTwo(!opensTwo);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemText primary="Home" className="pb-4 border-b-2" />
      </ListItemButton>
      <ListItemButton onClick={handleClickOne}>
        <ListItemText primary="Services" className="pb-4 border-b-2" />
        <AddCircleIcon className="text-blue-600" />
      </ListItemButton>
      <Collapse in={opensOne} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText
              primary="AI Visual Inspection"
              className="pb-4 border-b-2"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText
              primary=" AI Infrastructure Inspection"
              className="pb-4 border-b-2"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText
              primary="AI People Tracking"
              className="pb-4 border-b-2"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText
              primary=" AI Data Analytics"
              className="pb-4 border-b-2"
            />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickTwo}>
        <ListItemText primary="Products" className="pb-4 border-b-2" />
        <AddCircleIcon className="text-blue-600" />
      </ListItemButton>
      <Collapse in={opensTwo} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText
              primary="Asset Performance Management"
              className="pb-4 border-b-2"
            />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemText primary="Blog" className="pb-4 border-b-2" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Contact" />
      </ListItemButton>
    </List>
  );
}
