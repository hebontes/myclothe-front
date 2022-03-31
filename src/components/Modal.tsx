/* eslint-disable react/jsx-no-bind */
import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useParams, useNavigate } from 'react-router-dom'

const Modal = ({ children, title, page, del, saveClick }: any) => {
	const params = useParams()
	const navigate = useNavigate()

	const isEditting = params.id

	function closeModal() {
		return navigate(`/${page}`)
	}

	return (
		<Transition appear show as={Fragment}>
			<Dialog as='div' className='fixed inset-0 z-10 overflow-y-auto' onClose={closeModal}>
				<div className='min-h-screen px-4 text-center'>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Dialog.Overlay className='fixed inset-0' />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span className='inline-block h-screen align-middle' aria-hidden='true'>
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0 scale-95'
						enterTo='opacity-100 scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-95'
					>
						<div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl'>
							<Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'>
								{isEditting
									? `${del ? 'Delete' : 'Edit'} ${title} ${params.id}`
									: `Create ${title} Listing`}
							</Dialog.Title>
							<div className='mt-2'>{children}</div>

							<div className='mt-8'>
								<button
									type='button'
									className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-gray-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
									onClick={closeModal}
								>
									Close
								</button>

								<button
									type='button'
									className={`ml-2 inline-flex justify-center px-8 py-2 text-sm text-white font-medium ${
										del ? 'bg-red-300' : 'bg-blue-500'
									} border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500`}
									onClick={() => {
										saveClick()
									}}
								>
									{del ? 'Delete' : 'Save'}
								</button>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	)
}

export default Modal
