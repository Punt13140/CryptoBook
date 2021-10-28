<?php

namespace App\Entity;

use App\Repository\PositionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PositionRepository::class)
 */
class Position
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="float")
     */
    private $nbCoins;

    /**
     * @ORM\ManyToOne(targetEntity=Cryptocurrency::class, inversedBy="positions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $coin;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="positions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isOpened;

    /**
     * @ORM\Column(type="float")
     */
    private $entryCost;

    /**
     * @ORM\OneToMany(targetEntity=Vente::class, mappedBy="position", orphanRemoval=true, cascade={"persist"})
     */
    private $ventes;

    /**
     * @ORM\OneToMany(targetEntity=StrategyPosition::class, mappedBy="position", orphanRemoval=true, cascade={"persist"})
     */
    private $strategies;

    /**
     * @ORM\Column(type="date_immutable", nullable=true)
     */
    private $openedAt;

    public function __construct($user)
    {
        $this->user = $user;
        $this->ventes = new ArrayCollection();
        $this->strategies = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCoin(): ?Cryptocurrency
    {
        return $this->coin;
    }

    public function setCoin(?Cryptocurrency $coin): self
    {
        $this->coin = $coin;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getIsOpened(): ?bool
    {
        return $this->isOpened;
    }

    public function setIsOpened(bool $isOpened): self
    {
        $this->isOpened = $isOpened;

        return $this;
    }

    public function getEntryCoinValue(): ?float
    {
        return round(($this->getEntryCost() / $this->getNbCoins()), 2);
    }

    public function getEntryCost(): ?float
    {
        return $this->entryCost;
    }

    public function setEntryCost(float $entryCost): self
    {
        $this->entryCost = $entryCost;

        return $this;
    }

    public function getNbCoins(): ?float
    {
        return $this->nbCoins;
    }

    public function setNbCoins(float $nbCoins): self
    {
        $this->nbCoins = $nbCoins;

        return $this;
    }

    /**
     * @return Collection|Vente[]
     */
    public function getVentes(): Collection
    {
        return $this->ventes;
    }

    public function addVente(Vente $vente): self
    {
        if (!$this->ventes->contains($vente)) {
            $this->ventes[] = $vente;
            $vente->setPosition($this);
        }

        return $this;
    }

    public function addStrategy(StrategyPosition $strategy): self
    {
        if (!$this->strategies->contains($strategy)) {
            $this->strategies[] = $strategy;
            $strategy->setPosition($this);
        }

        return $this;
    }

    public function removeVente(Vente $vente): self
    {
        if ($this->ventes->removeElement($vente)) {
            // set the owning side to null (unless already changed)
            if ($vente->getPosition() === $this) {
                $vente->setPosition(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|StrategyPosition[]
     */
    public function getStrategies(): Collection
    {
        return $this->strategies;
    }

    public function removeStrategy(StrategyPosition $strategy): self
    {
        if ($this->strategies->removeElement($strategy)) {
            // set the owning side to null (unless already changed)
            if ($strategy->getPosition() === $this) {
                $strategy->setPosition(null);
            }
        }

        return $this;
    }

    public function getOpenedAt(): ?\DateTimeImmutable
    {
        return $this->openedAt;
    }

    public function setOpenedAt(?\DateTimeImmutable $openedAt): self
    {
        $this->openedAt = $openedAt;

        return $this;
    }

}
