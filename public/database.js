firebase.database().ref().on('value', function (snapshot) {
    const data = snapshot.val()

    document.getElementById('realtime-data').innerText = JSON.stringify(data, null, 2)
})
function setData() {
    firebase.database().ref("profile").set({
        name: 'Nine',
        age: 19,
        devices: {
            iphone: true,
            macbook: true,
            huawei: true,
        },
    })
}
function updateData() {
    firebase.database().ref('profile').update({
        name: 'Johnson'
    })
}
function pushData() {
    firebase.database().ref('messages').push("ไอบ้า")
}

function deleteData() {
    firebase.database().ref("profile").remove()
}