/**
 * `assign-updated-by` middleware
 */

import type { Core } from '@strapi/strapi';

export default (config, { strapi }: { strapi: Core.Strapi }) => {
	// Add your own logic here.
	return async (ctx, next) => {
		strapi.log.info('In assign-updated-by middleware.');
		ctx.request.body.data.updated_by_user = ctx.state.user.id;
		await next();
	};
};
