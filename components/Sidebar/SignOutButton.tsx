import { IconLogout } from '@tabler/icons-react';
import { SidebarButton } from './SidebarButton';
import { useClerk } from "@clerk/clerk-react";


export const SignOutButton = () => {
 const { signOut } = useClerk();
 return (

      <SidebarButton
        text="Sign out"
        icon={<IconLogout size={18} />}
        onClick={() => signOut()}
      />
 );
};
