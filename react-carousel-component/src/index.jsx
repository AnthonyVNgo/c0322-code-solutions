import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const urls = [
  {
    id: 1,
    url: 'https://i.kym-cdn.com/entries/icons/original/000/021/668/kermit.jpg'
  },
  {
    id: 2,
    url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a5a615b-fae6-4778-8a89-285737990975/detz9rr-b6f43647-3b7d-4f63-8515-36c3a7ecc5bf.png/v1/fill/w_1280,h_1046,strp/kermit_ak_png_sticker_by_eledwino_detz9rr-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0NiIsInBhdGgiOiJcL2ZcLzBhNWE2MTViLWZhZTYtNDc3OC04YTg5LTI4NTczNzk5MDk3NVwvZGV0ejlyci1iNmY0MzY0Ny0zYjdkLTRmNjMtODUxNS0zNmMzYTdlY2M1YmYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ABxstxXsqyCM_KEcSE7DbOfDUYrTSFzP55RUyOTiG7s'
  },
  {
    id: 3,
    url: 'https://i.kym-cdn.com/entries/icons/original/000/015/878/thatsnoneofmy.jpg'
  }
];

root.render(<Carousel urls={urls} />);
