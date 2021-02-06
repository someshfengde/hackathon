/** @jsxRuntime classic */
/** @jsx jsx */
import React,{useState,useEffect} from 'react';
import {css,jsx} from "@emotion/react";
import {io} from 'socket.io-client';
import styled from "@emotion/styled";
import {nanoid} from "nanoid";

const Input = styled.input`
display:flex;
size:3em;
background:white;

`

const  NewSending = () => {
    const [socket, setSocket] = useState();
    //emitting socket event's 
    useEffect(() => {
        if (!socket) {
            !socket && setSocket(io("http://localhost:3001"));
          }
          if (socket) {
              socket.on("connection" ,()=> {
                  console.log("I am connected to backend");
              })
        socket.emit("join",() => {
            const obj = {message:"Hi from user"};
            return obj;
        });
        }
    }, [socket]);



    const handleSubmit = () => {
        socket.emit("submit", () =>{
            const obj = {id:"name",val: "value"}
            return obj;
        })
    }
    return (
        <div>
            <h1>this is form</h1>
            <form>
               <Input placeholder="enter your message here"></Input>
               <Input value="Submit" type="Submit" placeholder="submit"></Input>
            </form>
        </div>
    )
}

export default NewSending;
