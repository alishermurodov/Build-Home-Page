import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FileToBase64 } from '../../Utils/FileToBase64'
import { SketchPicker } from 'react-color'
//base64




const Gallery = () => {

  const [work, setWork] = useState([])
  const [text, setText] = useState("")
  const [image, setImage] = useState(null)
  const [color, setColor] = useState("")
  const [show, setShow] = useState(false)


  const API = 'http://localhost:3000/hotel'
  const APIsearch = `http://localhost:3000/hotel?q=${text}`


  const [imageEdit, setImageEdit] = useState(null)
  const [textEdit, setTextEdit] = useState("")
  const [colorEdit, setColorEdit] = useState("")
  const [idx, setIdx] = useState(null);
  const [modal, setModal] = useState(false);


  //getData
  async function getData() {
    try {
      const { data } = await axios.get(text.trim().length == 0 ? API : APIsearch)
      setWork(data)
      console.log(data);
    } catch (error) {

    }
  }

  //addData
  async function addData() {
    try {
      let newObj = {
        title: text,
        img: image,
        color: color
      }
      const { data } = await axios.post(API, newObj)
      getData()
      setImage(null)
      setColor("")
      setText("")
      setShow(false)
    } catch (error) {
      console.error('error');
    }
  }

  //handlecolor
  const handleColor = (e) => {
    setColor(e.hex);
  };

  //handleImage
  const handleImage = async (event) => {
    let file = await FileToBase64(event.target.files[0])
    setImage(file);
  };


  //edit
  async function editData() {
    try {
      const { data } = await axios.put(`${API}/${idx}`, {
        title: textEdit,
        color: colorEdit,
        img: imageEdit
      });
      getData();
      setModal(false);
    } catch (error) {}
  }

  const handleColorEdit = (e) => {
    setColorEdit(e.hex);
  };

  const handleImageEdit = async (event) => {
    let file = await FileToBase64(event.target.files[0]);
    setImageEdit(file);
  };

  //delete
  async function deleteData(id) {
    try {
      const { data } = await axios.delete(`${API}/${id}`)
      getData()
    } catch (error) {

    }
  }

  useEffect(() => {
    getData()
  }, [text])

  return (
    <div>
      <div className=" bg-[url(./assets/home/homeBg1.png)] bg-no-repeat bg-cover  text-[#fff]">
        <div className="w-[90%] md:w-[86%] mx-auto pt-[120px] md:pt-[180px] pb-[70px] md:pb-[100px]">
          <h1 className='text-[33px] md:text-[52px] text-center font-bold mb-[16px]'>About our story - We are <br /> the best team</h1>
        </div>
      </div>
      <div className="w-[90%] md:w-[86%] mx-auto flex justify-center flex-wrap items-end pt-[50px]">
        <input value={text} onChange={(e) => setText(e.target.value)} type="text" className='pl-[20px] w-[350px] h-[50px] text-[19px] outline-none border-[1px]' placeholder='Search... & Enter your data' />
        <div className="flex flex-col">
          <input type="file" onChange={(event) => handleImage(event)} className='h-[28px]  w-[130px]' placeholder='sss' />
          <div className="h-[50px] bg-gradient-to-r from-[#056088] to-[#09A7CA]">
            <img src={image} className='w-[100%] h-[100%]' />
          </div>
        </div>
        {show ? <SketchPicker className='absolute top-[454px] right-[170px]' color={color} onChange={handleColor} /> : null}
        <button style={{ background: color }} onClick={() => setShow(!show)} className='w-[60px] h-[50px] bg-gradient-to-r from-[#056088] to-[#09A7CA] font-medium text-[#fff]'>Color</button>
        <button onClick={() => addData()} className='w-[120px] h-[50px] bg-gradient-to-r from-[#056088] to-[#09A7CA] font-medium text-[#fff]'>Add</button>
      </div>
      <div className="w-[90%] md:w-[86%] mx-auto md:flex justify-between items-center flex-wrap py-[50px] md:py-[100px] ">
        {
          work.map((e) => {
            return (
              <div className='md:w-[26%] mb-[40px] md:mb-[100px] h-[60vh]' style={{ boxShadow: '0px 8px 30px 0px grey' }}>
                <img src={e.img} className='w-[100%] h-[48%]' />
                <div className="p-[10px] md:p-[30px]" style={{ background: e.color }}>
                  <h3 className='text-[#056088] dark:text-[#fff] text-[20px] mb-[16px] font-bold'>{e.title}</h3>
                  <p className='mb-[16px]'>3 Months work time</p>
                  <div className="flex justify-between">
                    <button onClick={() => deleteData(e.id)} className='w-[140px] h-[50px] bg-gradient-to-r from-[#056088] to-[#09A7CA] font-medium text-[#fff]'>Delete</button>
                    <button
                      onClick={() => {
                        setIdx(e.id);
                        setModal(true);
                        setColorEdit(e.color);
                        setImageEdit(e.photo);
                        setTextEdit(e.title);
                      }}
                      className='w-[140px] h-[50px] bg-gradient-to-r from-[#056088] to-[#09A7CA] font-medium text-[#fff]'>Edit</button>
                  </div>
                </div>
              </div>
            )
          })

        }
        {modal ? (
          <div className="modal h-[80vh] overflow-auto">
            <div className="modal-content p-[40px] bg-[#242323] flex flex-col rounded-[20px]">
              <input
                type="text"
                value={textEdit}
                onChange={(e) => setTextEdit(e.target.value)}
                name=""
                id=""
                className='w-[140px] h-[40px] mr-[40px] mb-[30px]'
              />
              <SketchPicker color={colorEdit} onChange={handleColorEdit} />
              <img src={imageEdit} className='my-[20px]' alt="" />
              <input type="file" className='w-[43%] mb-[10px]' onChange={handleImageEdit} name="" id="" />
              <button onClick={() => setModal(false)} className="w-[40px] h-[29px] bg-[red] rounded-[10px] text-[#fff] text-[20px] mx-auto mb-[10px]">
                &times;
              </button>
              <button
                onClick={() => editData()}
                className="p-[10px] w-[100%] bg-[green] text-[white]"
              >
                Submit
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Gallery