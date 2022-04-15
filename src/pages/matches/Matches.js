import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { red, green, blueGrey,blue } from "@material-ui/core/colors";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import { getMatchesApi } from "../../services/apiendpoints";
import { UrlBase } from "../../constants/constants";

const DivBtn = styled.div`
  display: flex;
  background: red;
`;

const DivPerfil = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 8px;
  span {
    margin-left: 1rem;
    font-size: 1.2rem;
  }
`;

const useStyles = makeStyles({
  mainContainer: {
    maxWidth: "400px",
    minHeight: 600,
    margin: "20% auto",
    boxShadow: "0 0 1px 1px  black ",
    background: blueGrey[50],
  },
  cardHeaderClass: {
    background: red[500],
    borderBottom: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  return: {
    margin: "1rem 5rem 1rem 1rem",
    height: 36,
    width: 42,
    background: red[600],
    color: blue[700],
    position: "relative",
    left:-270,
    "&:hover": {
      background: blue[100],
    },
  },
  icon: {
    width: 40,
    height: 40,
  },

});

const Main = ((props) => {
  const classes = useStyles();
  const [match, setMatch] = useState([]);

  useEffect(() => {
    getMatchesApi(saveMatches)
 
  }, [props.reseted]);

  const saveMatches = (data) => { 
    setMatch(data)

  }

  return (
     <Card className={classes.mainContainer} align='center'>
    <CardHeader
      className={classes.cardHeaderClass}
      title='astromatch'
      action={
        <>
        <IconButton
          aria-label='Go back'
          className={classes.return}
          onClick={()=>props.changingePage()}
          >
          <ArrowBackOutlinedIcon className={classes.icon} />
        </IconButton>
        </>
      }
    />
       
      
           {/* <IconButton
          aria-label='Go back'
          className={classes.return}
          onClick={()=>props.changingePage()}
          >
          <ArrowBackOutlinedIcon className={classes.icon} />
        </IconButton> */}

         
      <CardContent>
        {match.map((item) => {
          return (
            <DivPerfil key={item.id}>
              <Avatar sizes='large' alt={item.name} src={item.photo} />
              <span>{item.age} anos</span>
              <span>{item.name}</span>
            </DivPerfil>
          );
        })}
      </CardContent>
    </Card>
  );
});
export default Main;
