import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display:{xs:'none',sm:"block"}}}>
      <Box position='fixed'>
        <Typography variant='h6' fontWeight={100}>접속한 친구들</Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="1.JPG" />
          <Avatar alt="Travis Howard" src="귀돈.jpg" />
          <Avatar alt="Cindy Baker" src="스윗달돈.JPG" />
          <Avatar alt="Agnes Walker" src="애기돈.JPG" />
          <Avatar alt="Trevor Henderson" src="KakaoTalk_20200801_193819826.jpg" />
          <Avatar alt="Trevor Henderson" src="KakaoTalk_20210929_192653181_02.jpg" />
          <Avatar alt="Trevor Henderson" src="KakaoTalk_20211207_133657870.jpg" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100}>사진들</Typography>
        <ImageList sx={{ width: 400, height: 500 }} cols={3} rowHeight={160} gap={5}>
          <ImageListItem>
            <img src='1.JPG'/>
          </ImageListItem>
          <ImageListItem>
            <img src='귀돈.jpg'/>
          </ImageListItem>
          <ImageListItem>
            <img src='스윗달돈.JPG'/>
          </ImageListItem>
          <ImageListItem>
            <img src='애기돈.JPG'/>
          </ImageListItem>
          <ImageListItem>
            <img src='KakaoTalk_20200512_184712690.jpg'/>
          </ImageListItem>
          <ImageListItem>
            <img src='KakaoTalk_20210929_192653181_02.jpg'/>
          </ImageListItem>
          <ImageListItem>
            <img src='KakaoTalk_20211207_133657870.jpg'/>
          </ImageListItem>
          <ImageListItem>
            <img src='KakaoTalk_20220411_092509754_09.jpg'/>
          </ImageListItem>
          <ImageListItem>
            <img src='KakaoTalk_20220411_092509754_10.jpg'/>
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  )
}

export default Rightbar