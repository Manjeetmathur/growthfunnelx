import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import ReplyModal from '../components/ReplyModal';
import { start, url } from '../components/Backendurl/url';
import { useLocation } from 'react-router-dom';
const AdminMessages = () => {
       
         useEffect( () => {
           start();
         }, [])
       const location = useLocation();
         useEffect(() => {
           window.scrollTo({ top: 0, behavior: 'smooth' });
         }, [location.pathname]);
       const { toast } = useToast();
       const [messages, setMessages] = useState([]);
       const [loading, setLoading] = useState(true);
       const [replyToEmail, setReplyToEmail] = useState(null);
       const [selectedMessage, setSelectedMessage] = useState(null);

       const fetchMessages = async () => {
              try {
                     const res = await axios.get(`${url}/get-all-messages`);
                     if (res.data.success) {
                            setMessages(res.data.messages);
                     } else {
                            toast({
                                   title: 'Error fetching messages',
                                   description: 'An error occurred while fetching messages.',
                                   variant: 'destructive',
                            });
                     }
              } catch (err) {
                     toast({
                            title: 'Network Error',
                            description: 'Could not fetch messages. Please try again later.',
                            variant: 'destructive',
                     });
                     console.error(err);
              } finally {
                     setLoading(false);
              }
       };

       useEffect(() => {
              fetchMessages();
       }, []);

       return (
              <div className="bg-white p-8 my-10 rounded-xl shadow-sm border border-gray-100 mt-20">
                     <h2 className="text-2xl font-bold mb-6 gradient-text my-5">Client Messages</h2>

                     {loading ? (
                            <p className="text-gray-600">Loading messages...</p>
                     ) : messages.length === 0 ? (
                            <p className="text-gray-600">No messages found.</p>
                     ) : (
                            <div className="overflow-auto">
                                   <table className="w-full text-left border-collapse">
                                          <thead>
                                                 <tr className="bg-gray-50">
                                                        <th className="px-4 py-2 border-b">Name</th>
                                                        <th className="px-4 py-2 border-b">Email</th>
                                                        <th className="px-4 py-2 border-b">Phone</th>
                                                        <th className="px-4 py-2 border-b">Company</th>
                                                        <th className="px-4 py-2 border-b">Service</th>
                                                        <th className="px-4 py-2 border-b">Message</th>
                                                        <th className="px-4 py-2 border-b">Date</th>
                                                        <th className="px-4 py-2 border-b">Reply</th>

                                                 </tr>
                                          </thead>
                                          <tbody>
                                                 {messages.map((msg) => (
                                                        <tr key={msg._id} className="hover:bg-gray-50">
                                                               <td className="px-4 py-3 border-b">{msg.name}</td>
                                                               <td className="px-4 py-3 border-b">{msg.email}</td>
                                                               <td className="px-4 py-3 border-b">{msg.phone || '-'}</td>
                                                               <td className="px-4 py-3 border-b">{msg.company || '-'}</td>
                                                               <td className="px-4 py-3 border-b">{msg.service || '-'}</td>
                                                               <td className="px-4 py-3 border-b max-w-xs">
                                                                      {msg.message.length > 50 ? (
                                                                             <>
                                                                                    {msg.message.slice(0, 50)}...
                                                                                    <button
                                                                                           onClick={() => setSelectedMessage(msg)}
                                                                                           className="text-blue-600 ml-2 underline text-sm"
                                                                                    >
                                                                                           View
                                                                                    </button>
                                                                             </>
                                                                      ) : (
                                                                             msg.message
                                                                      )}
                                                               </td>
                                                               <td className="px-4 py-3 border-b text-sm text-gray-500">
                                                                      {new Date(msg.createdAt).toLocaleString()}
                                                               </td>
                                                               <td><button
                                                                      className="text-green-600 underline text-sm ml-2"
                                                                      onClick={() => setReplyToEmail(msg.email)}
                                                               >
                                                                      Reply
                                                               </button></td>
                                                        </tr>
                                                 ))}
                                          </tbody>
                                   </table>
                            </div>
                     )}
                     {replyToEmail && (
                            <ReplyModal toEmail={replyToEmail} onClose={() => setReplyToEmail(null)} />
                     )}
                     {/* Tailwind CSS Modal */}
                     {selectedMessage && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 py-20">
                                   <div className="bg-white rounded-xl shadow-lg w-full h-full max-w-xl p-6 relative overflow-auto">
                                          <button
                                                 className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl font-bold"
                                                 onClick={() => setSelectedMessage(null)}
                                          >
                                                 ×
                                          </button>
                                          <h3 className="text-xl font-semibold mb-4">Message from {selectedMessage.name}</h3>
                                          <div className="space-y-2 text-sm text-gray-700">
                                                 <p><strong>Email:</strong> {selectedMessage.email}</p>
                                                 <p><strong>Phone:</strong> {selectedMessage.phone || '-'}</p>
                                                 <p><strong>Company:</strong> {selectedMessage.company || '-'}</p>
                                                 <p><strong>Service:</strong> {selectedMessage.service || '-'}</p>
                                                 <p><strong>Date:</strong> {new Date(selectedMessage.createdAt).toLocaleString()}</p>
                                                 <p className="mt-4 whitespace-pre-line overflow-y-auto">
                                                        <strong>Message:</strong><br />
                                                        {selectedMessage.message}
                                                 </p>
                                          </div>
                                          <div className="mt-6 text-right">
                                                 <button
                                                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                                        onClick={() => setSelectedMessage(null)}
                                                 >
                                                        Close
                                                 </button>
                                          </div>
                                   </div>
                            </div>
                     )}
              </div>
       );
};

export default AdminMessages;
