/**
 * modelo controller
 */

import { factories } from '@strapi/strapi';
import axios from 'axios';
import fs from 'fs';
import { Blob } from 'buffer';

export default factories.createCoreController('api::modelo.modelo', {
	predecir: async ctx => {
		const file = ctx.request.files.file;

		// @ts-ignore
		const filePath = file?.filepath;
		const buffer = fs.readFileSync(filePath);
		const blob = new Blob([buffer], { type: 'text/csv' });

		const formData = new FormData();
		// @ts-ignore
		formData.append('file', blob, file?.originalFilename);

		try {
			let resultados = await axios.post(
				`${process.env.ML_API_URL}/predict-by-file`,
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			);

			return resultados.data;
		} catch (error) {
			ctx.badRequest({
				message: 'Error al predecir',
				error: error.message,
			});
		}
	},
});
