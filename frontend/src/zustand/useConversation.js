import {create} from 'zustand'

const useConversation=create((set)=>({ //this is like usestate
    selectedConversation:null,
    setSelectedConversation:(selectedConversation)=>set({selectedConversation}),
    messages:[],
    setMessages:(messages)=>set({messages})
}))

export default useConversation