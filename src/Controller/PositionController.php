<?php

namespace App\Controller;

use App\Entity\Position;
use App\Entity\User;
use App\Form\PositionType;
use App\Repository\PositionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/position")
 */
class PositionController extends AbstractController
{
    /**
     * @Route("/", name="position_index", methods={"GET"})
     */
    public function index(PositionRepository $positionRepository): Response
    {
        return $this->render('position/index.html.twig', [
            'positions' => $positionRepository->findBy(
                [
                    'user' => $this->getUser()
                ],
                [
                    'coin' => 'ASC',
                    'openedAt' => 'ASC',
                    'entryCost' => 'DESC'
                ]
            ),
        ]);
    }

    /**
     * @Route("/new", name="position_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $position = new Position();
        $form = $this->createForm(PositionType::class, $position);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            /**
             * @var User $user
             */
            $user = $this->getUser();
            $position->setUser($user);
            $entityManager->persist($position);
            $entityManager->flush();

            return $form->get('submitAndNext')->isClicked() ? $this->redirectToRoute('position_new') : $this->redirectToRoute('position_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('position/new.html.twig', [
            'position' => $position,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="position_show", methods={"GET"})
     */
    public function show(Position $position): Response
    {
        return $this->render('position/show.html.twig', [
            'position' => $position,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="position_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Position $position): Response
    {
        $form = $this->createForm(PositionType::class, $position);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();
            return $form->get('submitAndNext')->isClicked() ? $this->redirectToRoute('position_new') : $this->redirectToRoute('position_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('position/edit.html.twig', [
            'position' => $position,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="position_delete", methods={"POST"})
     */
    public function delete(Request $request, Position $position): Response
    {
        if ($this->isCsrfTokenValid('delete' . $position->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($position);
            $entityManager->flush();
        }

        return $this->redirectToRoute('position_index', [], Response::HTTP_SEE_OTHER);
    }
}
