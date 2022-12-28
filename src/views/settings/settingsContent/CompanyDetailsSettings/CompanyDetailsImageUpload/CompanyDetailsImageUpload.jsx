import React, { useState } from 'react'
import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import { Image } from 'primereact/image'
import { Button } from 'primereact/button'

const CompanyDetailsImageUpload = () => {
  const [fileList, setFileList] = useState([{}])
  const [visible, setVisible] = useState(false)

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }
  const onPreview = async (file) => {
    let src = file.url
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }

  const onLoadingClick = () => {
    setVisible(!visible)
  }
  return (
    <>
      <div className="card">
        <h5 className="text-center pt-3">Company Logo</h5>
        <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '10px' }}>
          <Image
            src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg"
            alt="Image"
            width="250"
            preview
          />
        </div>
        <Button
          label={!visible ? 'Upload New Logo' : 'Cancel'}
          icon={!visible ? 'pi pi-upload' : 'pi pi-times'}
          iconPos="right"
          onClick={onLoadingClick}
          style={{
            margin: '10px',
            marginBottom: '10px',
            backgroundColor: visible ? '#d9534f' : '',
          }}
        />
        <div>
          {visible ? (
            <div style={{ margin: '10px' }}>
              <div style={{ margin: '10px' }}>
                <span>
                  Please note that your selected image will be uploaded <b>automatically</b> to our
                  servers.<span style={{ color: 'red' }}>*</span>
                </span>
              </div>
              <ImgCrop rotate>
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  maxCount={1}
                  onChange={onChange}
                  onPreview={onPreview}
                >
                  {fileList.length < 2 && '+ Upload'}
                </Upload>
              </ImgCrop>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  )
}

export default CompanyDetailsImageUpload
