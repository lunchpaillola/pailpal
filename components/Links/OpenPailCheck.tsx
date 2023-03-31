import { IconGraph } from '@tabler/icons-react';
import { SidebarButton } from '../Sidebar/SidebarButton';


export const PailCheckButton = () => {
 return (

      <SidebarButton
        text="Open PailCheck"
        icon={<IconGraph size={18} />}
        onClick={() => window.open('https://airtable.com/appeVBZJDcOmwORZg/tblGKs2Gc6lQ4bWDi/viwMx8pZkqOSyFv4Q?blocks=hide')}
      />
 );
};
