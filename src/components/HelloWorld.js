   import React, {Component} from 'react'
   import Friend from './Friend'


   export default class HelloWorld extends Component{ 
        constructor(props){
          super(props)
          this.state = {
              friendsList:[
                {name: 'josh'},
                {name: 'mj'},
                {name: 'yo'},
                {name: 'dave'},
                {name: 'steve'}
               ],
               name: ""
          }
          this.changehandler = this.changehandler.bind(this)
          this.addToFriendsList = this.addToFriendsList.bind(this)
        }

        changehandler(event){
            this.setState({
                name: event.target.value
            })
        }

        addToFriendsList(){
            //dont do this!!!!
            // this.state.friendsList.push(this.state.name)
            // console.log(this.state.friendsList)

            //DO THIS!!!
            let copiedFriendsList= this.state.friendsList.slice()
            copiedFriendsList.push({name: this.state.name})
            this.setState({
                friendsList: copiedFriendsList,
                name: ''
            })
        }

        render(){

            const{friendsList, name} = this.state
            const mappedFriendsList = this.state.friendsList.map(
                (friend, index, array) =>{
                return <Friend key={friend.name} name={friend.name} index={index} />
            })
              console.log(this.state.name)
            return (
            <div>
            {mappedFriendsList} 

            <input onChange={this.changehandler}/>
            <button onClick={this.addToFriendsList}>add friend</button>
            
            </div>
            )
        }
            
   }
  

