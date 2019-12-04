import React, { Component, Fragment } from "react"

export default function({data, render}) {
  return (
    <div>{ data.map(render) }</div>
  )
}