import { IconNotebook } from '@tabler/icons-react';
import { SidebarButton } from '../Sidebar/SidebarButton';


export const PailPadButton = () => {
 return (

      <SidebarButton
        text="Open PailPad"
        icon={<IconNotebook size={18} />}
        onClick={() => window.open('https://www.notion.so/lunchpaillabs/67db306794c1422b8e53c7b2ed8097ac?v=a2b8a69f80794ea6ab068fbb84c6b2d3')}
      />
 );
};
