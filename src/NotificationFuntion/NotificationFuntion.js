export const notfiyMe = () => {

    const notified = sessionStorage.getItem("notified")

    const showNotifcation = () => {
        let notification = new Notification("Slice App", {
            body: 'You have new upcoming subscriptions'
        });

        notification.onClick = () => {
            window.open('https://ks-slice.herokuapp.com/login')
        }
    }

    if (!("Notification" in window)) {
        alert("This browser does not support system notifcations")
    }

    else if (Notification.permission === "granted" && notified !== "true") {
        showNotifcation()
        sessionStorage.setItem("notified", "true")
    }

    else if (Notification.permission === "default") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                showNotifcation()
            }
        })
    }

}