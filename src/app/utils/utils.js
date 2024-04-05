import Swal from 'sweetalert2'

export const successMessage = () => {
    Swal.fire({
      title: '¡Ganador actualizado!',
      text: 'Se ha actualizado el ganador de la partida',
      icon: 'success',
      confirmButtonText: '¡Entendido!'
    })
  }

  export const errorMessage = () => {
    Swal.fire({
      title: '¡Error!',
      text: 'Hubo un error al actualizar el ganador de la partida',
      icon: 'error',
      confirmButtonText: '¡Entendido!'
    })
  }