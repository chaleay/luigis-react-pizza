import { getMenu } from '../../services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  return (
    <h1>
      <ul className="divide-y divide-stone-200 px-2">
        {menu.map((m) => (
          <MenuItem key={m.id} pizza={m} />
        ))}
      </ul>
    </h1>
  );
}

// used by useLoaderData
export async function loader() {
  return await getMenu();
}

export default Menu;
