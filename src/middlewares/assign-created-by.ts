/**
 * `assign-created-by` middleware
 */

import type { Core } from '@strapi/strapi';

export default (config, { strapi }: { strapi: Core.Strapi }) => {
	// Add your own logic here.
	return async (ctx, next) => {
		strapi.log.info('In assign-created-by middleware.');
		ctx.request.body.data.created_by_user = {
			id: ctx.state.user.id,
		};
		await next();
	};
};
