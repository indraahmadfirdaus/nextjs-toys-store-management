import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CategorySelectOptions from "./CategorySelectOptions";
import ToysSelectOptions from "./ToysSelectOptions";

export default function AddTransactionModal({
  toggle,
  setToggle,
  handleSubmit,
}) {
  const [payload, setPayload] = useState({
    noTransaksi: "",
    tanggal: "",
    customerVendor: "",
    mainan: {
      id: null,
    },
  });

  function closeModal() {
    // handleSubmit(payload);
    setToggle(false);
  }

  return (
    <>
      <Transition appear show={toggle} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Tambah Transaksi
                  </Dialog.Title>
                  <div className="mt-2">
                    <form>
                      <div class="grid gap-6 mb-6">
                        <div>
                          <label class="block mb-2 text-sm font-medium text-gray-900 ">
                            Kode Transaksi
                          </label>
                          <input
                            onChange={(ev) => {
                              setPayload({
                                ...payload,
                                noTransaksi: ev.target.value,
                              });
                            }}
                            type="text"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                          />
                          <label class="block mb-2 text-sm font-medium text-gray-900 ">
                            Tanggal
                          </label>
                          <input
                            onChange={(ev) => {
                              setPayload({
                                ...payload,
                                tanggal: ev.target.value,
                              });
                            }}
                            type="date"
                            id="first_name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                          />
                          <ToysSelectOptions
                            callback={(id) => {
                              setPayload({
                                ...payload,
                                mainan: { id: id },
                              });
                            }}
                          />
                          <label class="block mb-2 text-sm font-medium text-gray-900 ">
                            Customer Vendor
                          </label>
                          <input
                            onChange={(ev) => {
                              setPayload({
                                ...payload,
                                customerVendor: Number(ev.target.value),
                              });
                            }}
                            type="text"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                          />
                        </div>
                      </div>
                    </form>

                    {/* <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p> */}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
