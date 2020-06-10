var form = [
	{
		type: 'formData',
		title: 'Titulo del formulario',
		description: 'Información del evento. Un solo párrafo.'
	},

	{
		type: 'formData',
		description: 'Texto sin titulo en un formData distinto, para hacer otro párrafo.'
	},

	{
		type: 'formData',
		title: 'Titulo sin descripcion'
	},

	{
		type: 'textbox',
		title: 'Nombre',
		description: 'Ingrese nombre del participante.',
		id: 'nombreParticipante',
		validation: {
			phone: false,
			email: false
		}
	},

	{
		type: 'radio',
		title: 'Horario',
		description: 'Elija su horario de preferencia.',
		id: 'horarioSeleccionado',
		options: [
			{
				display: '9:00 am a 11:00 am',
				value: 'matutina'
			},
			{
				display: '5:00 pm a 7:00 pm',
				value: 'vespertina'
			}
		]
	},

	{
		type: 'radio',
		title: 'Nivel',
		description: 'Elija su nivel de conocimientos.',
		id: 'nivelSeleccionado',
		options: [
			{
				display: 'Principiante (nunca he usado la herramienta)',
				value: 'principiante'
			},
			{
				display: 'Intermedio (he usado un poco la herramienta)',
				value: 'intermedio'
			},
			{
				display: 'Experto (he desarrollado proyectos con la herramienta)',
				value: 'experto'
			}
		]
	},

	{
		type: 'checkbox',
		title: 'Plataforma',
		description: 'Plataforma para la cuál desarrollará',
		id: 'plataformaSeleccionada',
		options: [
			{
				display: 'Android',
				value: 'android'
			},
			{
				display: 'iOS',
				value: 'ios'
			}
		]
	},

	{
		type: 'checkbox',
		tipe: 'Sistema operativo',
		description: 'Sistema operativo usado para desarrollar',
		id: 'sistemaSeleccionado',
		options: [
			{
				display: 'Windows',
				value: 'windows'
			},
			{
				display: 'Linux',
				value: 'linux'
			}
		]
	}
];