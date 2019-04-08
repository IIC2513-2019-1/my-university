module.exports = {
  up(queryInterface) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const coursesData = [
      {
        code: 'IIC2513',
        name: 'Tecnologías y Aplicaciones Web',
        description: 'Este curso busca entrenar a los alumnos en las tecnologías WEB. Hoy las tecnologías WEB son plataformas sustentadoras de variados sistemas, incluso transaccionales. Este curso aproxima al alumno a trabajar con las tecnologías WEB de vanguardia y le permite desarrollar aplicaciones WEB utilizando técnicas y herramientas adecuadas a aquellos fines.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'IIC1103',
        name: 'Introducción a la Programación',
        description: 'Este curso enseña a resolver problemas algorítmicos mediante la programación de computadores. En particular, el curso enseña los fundamentos de la programación -cómo especificar los datos que describen un problema y cómo diseñar algoritmos que puedan procesar esos datos- y su aplicación a la resolución de una variedad de tipos de problemas. El curso hace énfasis en el estilo de de programación orientada a objetos, en las estructuras de datos fundamentales, y en los algoritmos fundamentales. Los alumnos deben usar herramientas de programación para desarrollar sus programas.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'IIC1253',
        name: 'Matemáticas Discretas',
        description: 'El curso enseña los elementos que permiten formalizar enunciados de problemas diversos de ingeniería usando conceptos de matemática discreta (conjuntos, relaciones, funciones, inducción, etc.) y a modelar este tipo de problemas con estos elementos además, se enseña la teoría de grafos, para representar y resolver algunos de estos tipos de problemas, y la metodología formal de análisis de algoritmos y de complejidad computacional.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'IIC2143',
        name: 'Ingeniería de Software',
        description: 'Este curso enseña técnicas para llevar a cabo un verdadero proyecto de desarrollo de software, desde el descubrimiento y la especificación de los requisitos, al interactuar con el cliente y/o usuarios, a la aplicación, experimentación y demostración de una solicitud que cumple los requisitos.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return queryInterface.bulkInsert('courses', coursesData);
  },

  down(queryInterface) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('courses', null, {});
  },
};
