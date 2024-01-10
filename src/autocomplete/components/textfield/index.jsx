
// eslint-disable-next-line react/prop-types
function Textfield({ text = '', onChange = () => { }, onKeypress = () => { }, disabledd = false }) {
    return <input disabled={disabledd} type="text" value={text} onChange={onChange} onKeyUp={onKeypress} placeholder="Enter Your Language" />
}

export default Textfield;