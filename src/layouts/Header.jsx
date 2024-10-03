import { Switch } from 'antd';
export default function Header({changeTheme , theme}) {
  



  return (
    <div className="border border-solid border-red-500 w-full h-44">
      <Switch checked={theme == 'dark' ? true : false} onChange={changeTheme} />
    </div>
  )
}
