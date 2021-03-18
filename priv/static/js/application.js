(() => {
    class WebsocketHandler {
        setupSocket() {
            this.socket = new WebSocket("ws://localhost:8000/ws/chat")

            this.socket.addEventListener("message" , (event) => {
                const pTag = document.createElement("p")
                pTag.innerHTML = event.data

                document.getElementById("main").append(pTag)
            })

            this.socket.addEventListener("close", () => {
                this.setupSocket()
            })
        }

        submit(event) {
            event.preventDefault()
            const input = document.getElementById("message")
            const message = input.value
            input.value = ""
            
            this.socket.send(
                JSON.stringify({
                    data: {message: message},
                })
            )
        }
    }

    const WebsocketClass = new WebsocketHandler()
    WebsocketClass.setupSocket()

    document.getElementById("button")
        .addEventListener("click", (event) => WebsocketClass.submit(event))
})()