import { createRoot } from 'react-dom/client';

import './dashboard.scss';
import App from './Components/App';
import { dashboardInfo } from './utils/data';

document.addEventListener('DOMContentLoaded', () => {
	const dashboardEl = document.getElementById('reactify-admin-dashboard');
	const info = JSON.parse(dashboardEl.dataset.info);



	createRoot(dashboardEl).render(<App {...dashboardInfo(info)} />);
});