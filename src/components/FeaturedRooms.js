import React, { Component } from "react";
import { RoomContext } from "../Context";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featureRooms: rooms } = this.context;
    console.log(rooms);

    return <div>from featured room</div>;
  }
}
