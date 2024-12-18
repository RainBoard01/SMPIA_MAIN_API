/**
 * analisis router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::analisis.analisis', {
	config: {
		create: {
			middlewares: [
				'global::assign-created-by',
				'global::assign-updated-by',
			],
		},
		update: {
			middlewares: ['global::assign-updated-by'],
		},
	},
});
