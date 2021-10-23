function App() {

  const connectToDeviceAndSubscribeToUpdates = async () => {
    try {
    
    // const device = await navigator.bluetooth
    //    .requestDevice({
    //       acceptAllDevices: true
    //    })

    // https://www.bluetooth.com/specifications/assigned-numbers/company-identifiers/
    // Google - 0x00E0
    // Apple - 0x004C
      const device = await navigator.bluetooth.requestDevice({ filters: [{ manufacturerData: [{ companyIdentifier: 0x004C }] }] })

    }
    catch(err) {
        console.log("Error: " + err)

    }
 }

  return (
    <div>
      <h1>Bluetooth Test App</h1>
      <button onClick={connectToDeviceAndSubscribeToUpdates}>Connect to device with Bluetooth</button>
    </div>
  );
}

export default App;
